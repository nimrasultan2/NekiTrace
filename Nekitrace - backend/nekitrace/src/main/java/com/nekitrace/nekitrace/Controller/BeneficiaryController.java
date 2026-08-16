package com.nekitrace.nekitrace.Controller;
import com.nekitrace.nekitrace.Dto.BeneficiaryResponseDTO;
import com.nekitrace.nekitrace.Dto.BeneficiaryCreateDTO;
import com.nekitrace.nekitrace.Service.BeneficiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/beneficiaries")
@CrossOrigin(origins = "http://localhost:5173")
public class BeneficiaryController
{
    @Autowired
    private BeneficiaryService beneficiaryService;

    @GetMapping
    public List<BeneficiaryResponseDTO> getAllBeneficiaries()
    {
        return beneficiaryService.getAllBeneficiaries();
    }

    @PostMapping
    public BeneficiaryResponseDTO createBeneficiary(@RequestBody BeneficiaryCreateDTO request)
    {
        return beneficiaryService.createBeneficiary(request);
    }

}