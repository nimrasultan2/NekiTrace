package com.nekitrace.nekitrace.Repository;

import com.nekitrace.nekitrace.Model.Beneficiary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Integer> {
}