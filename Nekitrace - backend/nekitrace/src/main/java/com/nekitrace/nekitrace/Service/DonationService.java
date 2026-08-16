package com.nekitrace.nekitrace.Service;

import com.nekitrace.nekitrace.Dto.DonationCreateDTO;
import com.nekitrace.nekitrace.Dto.DonationResponseDTO;

public interface DonationService {
    DonationResponseDTO createDonation(DonationCreateDTO request);
}