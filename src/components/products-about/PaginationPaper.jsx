import React, { useState } from 'react';
import { Container, Typography, Box, Pagination } from '@mui/material';
import { PaginationItem } from '@mui/lab';
// import imgcard from './productCard.png';
import data from './data'; // Импортируем данные из cardData.js

function PaginationPaper() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 16;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Pagination Example
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {currentCards.map((card, index) => (
          <Box key={index} width="20%" p={2}>
            <div className="card">
              <img src={card.image} alt={card.name} />
              <h2>{card.name}</h2>
              <p>{card.price}</p>
            </div>
          </Box>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(data.length / cardsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        shape="rounded"
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            onClick={() => setCurrentPage(item.page)}
          />
        )}
      />
    </Container>
  );
}

export default PaginationPaper;