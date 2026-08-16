package com.nekitrace.nekitrace.Service;

import com.nekitrace.nekitrace.Dto.BeneficiaryCreateDTO;
import com.nekitrace.nekitrace.Dto.BeneficiaryResponseDTO;
import com.nekitrace.nekitrace.Model.Beneficiary;
import com.nekitrace.nekitrace.Repository.BeneficiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BeneficiaryServiceImplementation implements BeneficiaryService {

    @Autowired
    private BeneficiaryRepository beneficiaryRepository;

    @Override
    public List<BeneficiaryResponseDTO> getAllBeneficiaries() {
        List<Beneficiary> beneficiaries = beneficiaryRepository.findAll();

        List<BeneficiaryResponseDTO> dtoList = new ArrayList<>();

        for (Beneficiary beneficiary : beneficiaries) {
            dtoList.add(BeneficiaryResponseDTO.fromEntity(beneficiary));
        }
        return dtoList;
    }

    @Override
    public BeneficiaryResponseDTO createBeneficiary(BeneficiaryCreateDTO request) {
        Beneficiary beneficiary = new Beneficiary();
        beneficiary.setFullName(request.getFullName());
        beneficiary.setAge(request.getAge());
        beneficiary.setDetails(request.getDetails());
        beneficiary.setImageUrl(request.getImage());

        Beneficiary saved = beneficiaryRepository.save(beneficiary);
        return BeneficiaryResponseDTO.fromEntity(saved);
    }
}