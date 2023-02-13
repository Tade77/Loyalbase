import styled from "styled-components";

export const ButtonTheme = styled.button`
  width: 443px;
  height: 50px;
  color: white;
  background: linear-gradient(
    112.92deg,
    #5404ff 18.35%,
    rgba(189, 59, 210, 0.94) 71.49%
  );
  border-radius: 100px;
`;
export const FormWrapper = styled.div`
  background: #1d2939;
  border-radius: 20px;
  position: absolute;
  width: 633px;
  height: 837px;
  left: 707px;
  top: 178px;
`;
// export const AccessBtn = styled.div`
//   height: 424px;
//   width: 200px;
// `;

export const BtnText = styled.button`
  font-family: Satoshi;
  font-style: normal;
  color: #fcfcfc;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  background: "#1d2939
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // border: 2px solid red;
  justify-content: space-between;
`;
export const HeroWrapper = styled.div`
  .small {
    position: absolute;
    right: 313px;
    top: 128px;
  }
  .medium {
    position: absolute;
    left: 36px;
    top: 231px;
  }
  article {
    position: absolute;
    left: 319px;
    right: 319px;
    // border: 2px solid red;
  }
  .hero--txt {
    color: white;
    font-size: 65px;
    font-family: Satoshi;
    font-style: normal;
    font-weight: 900;
    line-height: 138%;
  }
  .fans--txt {
    color: rgba(189, 59, 210, 0.94);
    font-family: Satoshi;
    font-style: normal;
    font-weight: 900;
    line-height: 18%;
  }
  .text {
    font-family: Satoshi;
    color: white;
    // font-size: 24px:
    text-align: center;
    width: 568px;
    position: absolute;
    top: 286px;
  }
  .name {
    background-color: #121b27;
    width: 15rem;
    height: 1.5rem;
    position: absolute;
    top: 621px;
    left: 512px;
  }
`;
export const FooterWrapper = styled.div`
  margin: 0 auto;
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .home {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  .foo {
    width: 287px;
    height: 44px;
    color: white;
    // border: 2px solid red;
  }
  .foo--mid {
    color: white;
  }
  .number {
    color: white;
  }
`;
