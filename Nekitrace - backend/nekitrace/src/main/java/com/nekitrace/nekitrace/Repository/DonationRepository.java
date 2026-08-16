package com.nekitrace.nekitrace.Repository;

import com.nekitrace.nekitrace.Model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Integer> {
}