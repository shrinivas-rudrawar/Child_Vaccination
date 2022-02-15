package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.HospitaltHistory;
@Repository
public interface IHospitalHistoryDao extends JpaRepository<HospitaltHistory, Integer>{

}
