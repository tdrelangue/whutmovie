import React, { useState } from "react";
import styled from "styled-components";
import darkTheme from "../assets/Color theme";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #333; /* Background color */
  color: white; /* Text color */
  text-align: center;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards */
  margin: 20px; /* Add some margin around the container */
  padding-top: 80px; /* Space for fixed header height */
`;

const CategoryCard = styled.div`
  background-color: ${darkTheme.backgroundColor}; /* Use your desired background color */
  color: ${darkTheme.color}; /* Text color */
  padding: 20px; /* Add padding for spacing */
  margin: 10px; /* Space between cards */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add shadow */
  width: 250px; /* Adjust width as needed */
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  cursor: pointer; /* Change cursor to pointer */
  transition: transform 0.2s; /* Smooth scaling effect on hover */

  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
`;

const SubcategoriesContainer = styled.div`
  margin-top: 10px; /* Space between the title and subcategories */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")}; /* Show or hide */
`;

const SubcategoryButton = styled.button`
  background-color: ${darkTheme.hoverColor}; /* Use hover color from theme */
  border: 2px solid ${darkTheme.color}; /* Add border for better visibility */
  color: ${darkTheme.color}; /* Text color */
  cursor: pointer; /* Change cursor to pointer */
  font-size: 14px; /* Font size for subcategories */
  text-align: center; /* Center text */
  padding: 10px; /* Padding for buttons */
  margin: 5px; /* Margin between buttons */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s, transform 0.2s; /* Smooth transition for background color */

  &:hover {
    background-color: ${darkTheme.color}; /* Change background on hover */
    color: black; /* Change text color on hover */
    transform: scale(1.05); /* Scale effect on hover */
  }
`;

const CategoryTitle = styled.div`
  font-weight: bold; /* Make category title bold */
  font-size: 18px; /* Increase font size for visibility */
`;

const CategorySection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null); // Track which category is expanded

  const categories = [
    {
      name: "Comedy",
      subcategories: ["Romantic Comedy", "Stand-up", "Dark Comedy"],
    },
    {
      name: "Action",
      subcategories: ["Adventure", "Superhero", "Martial Arts"],
    },
    {
      name: "Drama",
      subcategories: ["Historical", "Biographical", "Crime"],
    },
    {
      name: "Horror",
      subcategories: ["Psychological", "Slasher", "Supernatural"],
    },
    {
      name: "Sci-Fi",
      subcategories: ["Space", "Time Travel", "Dystopian"],
    },
    {
      name: "Fantasy",
      subcategories: ["Epic", "Fairy Tale", "Urban Fantasy"],
    },
    {
      name: "Documentary",
      subcategories: ["Nature", "Historical", "Political"],
    },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
      <CategoriesContainer>
        {categories.map((cat, index) => (
          <CategoryCard key={index} onClick={() => toggleCategory(index)}>
            <CategoryTitle>{cat.name}</CategoryTitle>
            <SubcategoriesContainer isOpen={expandedCategory === index}>
              {cat.subcategories.map((subcat, subIndex) => (
                <SubcategoryButton key={subIndex}>{subcat}</SubcategoryButton>
              ))}
            </SubcategoriesContainer>
          </CategoryCard>
        ))}
      </CategoriesContainer>
  );
};

const Categories = () => {
    return (
      <PageContainer>
        <CategorySection />
      </PageContainer>
    );
  };

export default Categories;
