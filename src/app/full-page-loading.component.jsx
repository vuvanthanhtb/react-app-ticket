import React from "react";

const FullPageLoading = () => {
  const {
    // isNotLoginScreen,
    opacity, target,
  } = props;

  // const { totalLoadingProcess } = useSelector(
  //   (state) => state.app,
  // );

  if (totalLoadingProcess === 0) {
    // This is no on-going loading, disable loading indicator
    return '';
  }
  // }

  let opacityNum = 0.3;
  if (opacity) {
    // allow caller to change opacity
    opacityNum = opacity;
  }

  let gridContent = document.querySelector(target);
  if (!gridContent) {
    gridContent = document.querySelector('#root');
  }

  const backgroundColor = {
    backgroundColor: `rgba(128, 128, 128, ${opacityNum})`,
  };

  const loadingPanel = (
    <div style={backgroundColor} className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  return ReactDOM.createPortal(loadingPanel, gridContent);
};

export default FullPageLoading;
