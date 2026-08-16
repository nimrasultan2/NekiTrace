package com.nekitrace.nekitrace.Controller;
import com.nekitrace.nekitrace.Dto.DonationCreateDTO;
import com.nekitrace.nekitrace.Dto.DonationResponseDTO;
import com.nekitrace.nekitrace.Service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "http://localhost:5173")
public class DonationController
{
    @Autowired
    private DonationService donationService;

    @PostMapping
    public DonationResponseDTO createDonation(@RequestBody DonationCreateDTO request)
    {
        return donationService.createDonation(request);
    }
}