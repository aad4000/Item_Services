package com.example.item_services.services;

import com.example.item_services.models.Item;
import com.example.item_services.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    // Create a new item
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    // Retrieve an item by its ID
    public Optional<Item> getItemById(String id) {
        return itemRepository.findById(id);
    }

    // Retrieve all items
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    // Update an existing item
    public Optional<Item> updateItem(String id, Item updatedItem) {
        return itemRepository.findById(id).map(existingItem -> {
            existingItem.setName(updatedItem.getName());
            existingItem.setDescription(updatedItem.getDescription());
            return itemRepository.save(existingItem);
        });
    }

    // Delete an item by ID
    public boolean deleteItem(String id) {
        if (itemRepository.existsById(id)) {
            itemRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
