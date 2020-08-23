import React from "react";
import "./cardsContainer.styles.scss";

import MutualFundCard from "../card/card.component";

const CardsContainer = ({
  list,
  selectedForComparision,
  bringInForComparision,
  removeFromComparision
}) => {
  console.log("List is", list);
  return (
    <div className="cards-container">
      {list &&
        list.map((mutualFund) => (
          <MutualFundCard
            key={mutualFund.UID}
            {...mutualFund}
            selectedForComparision={selectedForComparision}
            bringInForComparision={bringInForComparision}
            removeFromComparision={removeFromComparision}
          />
        ))}
    </div>
  );
};

export default CardsContainer;

