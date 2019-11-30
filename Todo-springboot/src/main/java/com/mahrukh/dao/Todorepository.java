package com.mahrukh.dao;



import org.springframework.data.jpa.repository.JpaRepository;

import com.mahrukh.model.Todo;




public interface Todorepository extends JpaRepository<Todo, Integer> {

}
