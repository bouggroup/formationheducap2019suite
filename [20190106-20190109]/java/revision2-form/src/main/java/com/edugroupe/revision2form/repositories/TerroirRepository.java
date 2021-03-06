package com.edugroupe.revision2form.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.edugroupe.revision2form.metier.Terroir;

@RepositoryRestResource(path = "lesterroirs")
public interface TerroirRepository extends PagingAndSortingRepository<Terroir, Integer> {

}
