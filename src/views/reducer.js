export const actions = {
  SHOW_ASSET_FORM: "SHOW_ASSET_FORM",
  REQUEST_ASSET: "REQUEST_ASSET",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SHOW_ASSET_FORM:
      return { ...state, showAssetForm: payload };
    case actions.REQUEST_ASSET:
      payload.asset_id = state.assetIdCount;
      payload.serial = `${payload.type}-${state.assetIdCount}`;
      payload.status = "PENDING";
      return {
        ...state,
        assets: [...state.assets, payload],
        idCount: state.assetIdCount++,
        showAssetForm: false,
      };
    default:
      return state;
  }
};
