import React from "react";
import styled from "styled-components";
import {
  MinecraftiaRegularNormalCorn6px,
  MinecraftiaRegularNormalWhite6px,
  MinecraftiaRegularNormalWhite5px,
} from "../styledMixins";


function ItemTooltip(props) {
  const {
    modesty,
    rareItem,
    text1,
    adventureIncrease,
    reqLev50,
    reqStr000,
    reqInt000,
    reqLuk000,
    reqDex000,
    beginnerWarriorMag,
    canBeEquippedByAdele,
    categoryBoosterPack,
    attackSpeedFast,
    weaponAttack70,
    numberOfUpgradesAvailable7,
    remainingRestorationCount0,
    numberOfViciousHammerApplied0,
    price,
    potential,
    spanText1,
    spanText2,
    spanText3,
  } = props;

  return (
    <ItemTooltip1>
      <ItemTooltipTopCard>
        <TopTitle>
          <StarRating>
            <Star1 src="/img/star-1.svg" alt="Star 1" />
            <Star1 src="/img/star-1.svg" alt="Star 2" />
            <Star1 src="/img/star-3.svg" alt="Star 3" />
            <Star1 src="/img/star-3.svg" alt="Star 4" />
            <Star1 src="/img/star-3.svg" alt="Star 5" />
          </StarRating>
          <Modesty>{modesty}</Modesty>
          <RareItem>{rareItem}</RareItem>
        </TopTitle>
        <Line1Top src="/img/line-1-top.svg" alt="Line_1_Top" />
      </ItemTooltipTopCard>
      <ItemTooltipMiddleCard>
        <FlexRow>
          <TooltipMainImageCard></TooltipMainImageCard>
          <ItemStats>
            <OverlapGroup1>
              <Text1>{text1}</Text1>
              <AdventureIncrease>{adventureIncrease}</AdventureIncrease>
            </OverlapGroup1>
            <FlexRow1>
              <ReqContainer>
                <REQLEV50>{reqLev50}</REQLEV50>
                <REQSTR000>{reqStr000}</REQSTR000>
                <REQINT000>{reqInt000}</REQINT000>
              </ReqContainer>
              <Container>
                <REQLUK000>{reqLuk000}</REQLUK000>
                <REQLUK000>{reqDex000}</REQLUK000>
              </Container>
            </FlexRow1>
          </ItemStats>
        </FlexRow>
        <OverlapGroup>
          <BEGINNERWARRIORMAG>{beginnerWarriorMag}</BEGINNERWARRIORMAG>
          <CanBeEquippedByAdele>{canBeEquippedByAdele}</CanBeEquippedByAdele>
        </OverlapGroup>
        <Line2Middle src="/img/line-3-bottom.svg" alt="Line_2_Middle" />
      </ItemTooltipMiddleCard>
      <ItemTooltipMiddle2Card>
        <ItemDescription>
          <CATEGORYBoosterPack>{categoryBoosterPack}</CATEGORYBoosterPack>
          <ATTACKSPEEDFAST>{attackSpeedFast}</ATTACKSPEEDFAST>
          <WEAPONATTACK70>{weaponAttack70}</WEAPONATTACK70>
          <WEAPONATTACK70>{numberOfUpgradesAvailable7}</WEAPONATTACK70>
          <RemainingRestorationCount0>{remainingRestorationCount0}</RemainingRestorationCount0>
          <NUMBEROFVICIOUSHAMMERAPPLIED0>{numberOfViciousHammerApplied0}</NUMBEROFVICIOUSHAMMERAPPLIED0>
        </ItemDescription>
        <Line1Top src="/img/line-3-bottom.svg" alt="Line_3_Bottom" />
      </ItemTooltipMiddle2Card>
      <ItemTooltipBottomCard>
        <FlexRow2>
          <OverlapGroup2>
            <BlueSmallIcon></BlueSmallIcon>
            <Price>{price}</Price>
          </OverlapGroup2>
          <Potential>{potential}</Potential>
        </FlexRow2>
        <FlexContainer16828>
          <Text016828>
            <span className="minecraftia-regular-normal-white-6px">{spanText1}</span>
          </Text016828>
          <Text016828>
            <span className="minecraftia-regular-normal-white-6px">{spanText2}</span>
          </Text016828>
          <Text016828>
            <span className="minecraftia-regular-normal-white-6px">{spanText3}</span>
          </Text016828>
        </FlexContainer16828>
      </ItemTooltipBottomCard>
    </ItemTooltip1>
  );
}

const ItemTooltip1 = styled.div`
  width: 202px;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  align-items: center;
  min-height: 334px;
  border-radius: 7px;
  border: 1px solid;
  border-color: #bbbbbb;
  background: linear-gradient(
    180deg,
    rgba(253.93750101327896, 253.93750101327896, 253.93750101327896, 0.949999988079071) 0%,
    rgba(39.31250050663948, 38.657290264964104, 38.657290264964104, 0.949999988079071) 13.54166716337204%
  );
`;

const ItemTooltipTopCard = styled.div`
  width: 200px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 51px;
  gap: 11px;
`;

const TopTitle = styled.div`
  width: 46px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 40px;
  gap: 6px;
`;

const StarRating = styled.div`
  height: 8px;
  margin-left: 1px;
  display: flex;
  padding: 0 0.2px;
  align-items: flex-start;
  min-width: 40px;
`;

const Star1 = styled.img`
  width: 8px;
  height: 7px;
`;

const Modesty = styled.div`
  min-height: 11px;
  min-width: 41px;
  font-family: var(--font-family-arial-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const RareItem = styled.div`
  min-height: 9px;
  margin-left: 1px;
  min-width: 41px;
  font-family: var(--font-family-arial-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Line1Top = styled.img`
  width: 200px;
  height: 1px;
  object-fit: cover;
`;

const ItemTooltipMiddleCard = styled.div`
  width: 200px;
  margin-top: 9px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 118px;
`;

const FlexRow = styled.div`
  height: 62px;
  margin-right: -9px;
  display: flex;
  align-items: flex-start;
  min-width: 200px;
  gap: 2px;
`;

const TooltipMainImageCard = styled.div`
  width: 62px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid;
  border-color: #47b1f9;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4000000059604645) 0%,
    rgba(3.1875000474974513, 0, 0, 0.4000000059604645) 29.6875%
  );
`;

const ItemStats = styled.div`
  width: 136px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 62px;
`;

const OverlapGroup1 = styled.div`
  width: 80px;
  height: 36px;
  position: relative;
  align-self: flex-end;
  margin-right: 14px;
`;

const Text1 = styled.h1`
  position: absolute;
  top: 6px;
  left: 0;
  -webkit-text-stroke: 0.5px var(--black);
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgb(153.00000607967377, 153.00000607967377, 153.00000607967377) 51.66666507720947%,
    rgb(255, 255, 255) 100%
  );
  -webkit-background-clip: text !important;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-family: var(--font-family-barlow);
  font-weight: 700;
  color: transparent;
  font-size: var(--font-size-xxxl);
  text-align: center;
  letter-spacing: 2.5px;
  line-height: normal;
  white-space: nowrap;
`;

const AdventureIncrease = styled.div`
  position: absolute;
  top: 0;
  left: 18px;
  font-family: var(--font-family-arial-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const FlexRow1 = styled.div`
  height: 26px;
  display: flex;
  align-items: flex-end;
  min-width: 109px;
  gap: 15px;
`;

const ReqContainer = styled.div`
  width: 47px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 26px;
`;

const REQLEV50 = styled.div`
  min-height: 7px;
  font-family: var(--font-family-minecraftia-regular);
  font-weight: 400;
  color: var(--corn);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: normal;
`;

const REQSTR000 = styled.div`
  ${MinecraftiaRegularNormalWhite5px}
  min-height: 7px;
  margin-top: 4px;
  letter-spacing: 0;
  line-height: normal;
`;

const REQINT000 = styled.div`
  ${MinecraftiaRegularNormalWhite5px}
  min-height: 7px;
  margin-top: 1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Container = styled.div`
  ${MinecraftiaRegularNormalWhite5px}
  width: 47px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 15px;
  gap: 1px;
`;

const REQLUK000 = styled.div`
  min-height: 7px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup = styled.div`
  width: 183px;
  align-self: center;
  margin-top: 17px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  min-height: 32px;
  gap: 6px;
  background-color: #d9d9d936;
  border-radius: 3px;
  border: 1px solid;
  border-color: #0000004c;
`;

const BEGINNERWARRIORMAG = styled.p`
  ${MinecraftiaRegularNormalWhite5px}
  min-height: 7px;
  margin-right: 3px;
  min-width: 170px;
  -webkit-text-stroke: 1px var(--black);
  text-align: center;
  letter-spacing: 0.15px;
  line-height: normal;
`;

const CanBeEquippedByAdele = styled.p`
  ${MinecraftiaRegularNormalCorn6px}
  min-height: 8px;
  margin-left: 4px;
  min-width: 91px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Line2Middle = styled.img`
  width: 200px;
  height: 1px;
  margin-top: 7px;
  object-fit: cover;
`;

const ItemTooltipMiddle2Card = styled.div`
  width: 200px;
  margin-top: 7px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 66px;
  gap: 7px;
`;

const ItemDescription = styled.div`
  width: 160px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 59px;
`;

const CATEGORYBoosterPack = styled.div`
  ${MinecraftiaRegularNormalWhite6px}
  min-height: 8px;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: normal;
`;

const ATTACKSPEEDFAST = styled.div`
  ${MinecraftiaRegularNormalWhite6px}
  min-height: 8px;
  margin-top: 3px;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: normal;
`;

const WEAPONATTACK70 = styled.div`
  ${MinecraftiaRegularNormalWhite6px}
  min-height: 8px;
  margin-top: 2px;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: normal;
`;

const RemainingRestorationCount0 = styled.div`
  ${MinecraftiaRegularNormalCorn6px}
  min-height: 8px;
  margin-top: 2px;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: normal;
`;

const NUMBEROFVICIOUSHAMMERAPPLIED0 = styled.p`
  ${MinecraftiaRegularNormalWhite6px}
  min-height: 8px;
  margin-top: 2px;
  letter-spacing: 0;
  line-height: normal;
`;

const ItemTooltipBottomCard = styled.div`
  ${MinecraftiaRegularNormalWhite6px}
  width: 170px;
  margin-top: 6px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 43px;
  gap: 5px;
`;

const FlexRow2 = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 46px;
  gap: 3px;
`;

const OverlapGroup2 = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
`;

const BlueSmallIcon = styled.div`
  position: absolute;
  width: 10px;
  height: 9px;
  top: 0;
  left: 0;
  background-color: #0098fc;
  border-radius: 3px;
  border: 0.699999988079071px solid;
  border-color: #788692;
`;

const Price = styled.div`
  position: absolute;
  top: 2px;
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
`;

const Potential = styled.div`
  min-height: 8px;
  min-width: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexContainer16828 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 166px;
  height: 28px;
`;

const Text016828 = styled.div`
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

export default ItemTooltip;
