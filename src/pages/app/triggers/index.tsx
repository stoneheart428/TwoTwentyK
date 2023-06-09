import React, { useState } from "react";
import { AppLayout } from "../../../layout/AppLayout";
import {
  ButtonGroup,
  DatePageContainer,
  DatePageTitleWrapper,
  DatesPageWrapper,
  EmptyCards,
} from "../dates/styles";
import { Button, SellConfirmModal } from "../../../components";
import {
  CardGridSection,
  FilterSection,
  SellDateCardSection,
  ViewDateCardSection,
} from "../../../modules";
import { triggerCardData } from "./data";

export const TriggersPage: React.FC = () => {
  const [isView, setIsView] = useState<"view" | "sell" | "">("");

  const [modal, setModal] = useState(false);
  const handleSellConfirm = () => {
    setModal(true);
    setIsView("");
  };

  const handleView = (id: string | number) => {
    setIsView("view");
  };

  const handleCraft = (id: string | number) => {};

  const handleSell = (id: string | number) => {
    setIsView("sell");
  };

  return (
    <AppLayout>
      <SellConfirmModal open={modal} onClose={() => setModal(false)} />
      {triggerCardData.length > 0 ? (
        <DatesPageWrapper isview={isView ? "true" : undefined}>
          <DatePageContainer>
            <DatePageTitleWrapper>
              <h3>Triggers</h3>
              <ButtonGroup>
                <Button className="buy-button">Buy Cards</Button>
                <Button className="buy-button">Buy Packs</Button>
              </ButtonGroup>
            </DatePageTitleWrapper>
            <FilterSection />
            <CardGridSection
              data={triggerCardData}
              cardType={"trigger"}
              onCraft={handleCraft}
              onSell={handleSell}
              onView={handleView}
            />
            <ViewDateCardSection
              isView={isView === "view"}
              cardType="trigger"
              id={"asdfa"}
              onClose={() => setIsView("")}
            />
            <SellDateCardSection
              onSellConfirm={handleSellConfirm}
              isView={isView === "sell"}
              cardType="trigger"
              id={"asdfa"}
              onClose={() => setIsView("")}
            />
          </DatePageContainer>
        </DatesPageWrapper>
      ) : (
        <EmptyCards>
          <h3>No Triggers</h3>
          <p>It looks like you don’t have any triggers yet.   </p>
          <Button className="buy-button">Buy Cards</Button>
          <Button className="buy-button">Buy Packs</Button>
        </EmptyCards>
      )}
    </AppLayout>
  );
};
