package com.example.item_services.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.item_services.models.Item;

public interface ItemRepository extends MongoRepository<Item, String> {
}
