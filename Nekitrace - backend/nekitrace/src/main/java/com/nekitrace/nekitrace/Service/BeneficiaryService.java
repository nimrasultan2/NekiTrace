package com.nekitrace.nekitrace.Service;

import com.nekitrace.nekitrace.Dto.BeneficiaryCreateDTO;
import com.nekitrace.nekitrace.Dto.BeneficiaryResponseDTO;

import java.util.List;

public interface BeneficiaryService {
    List<BeneficiaryResponseDTO> getAllBeneficiaries();
    BeneficiaryResponseDTO createBeneficiary(BeneficiaryCreateDTO request);
}