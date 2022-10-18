export const actions = {
  SHOW_ASSET_FORM: "SHOW_ASSET_FORM",
  ADD_ASSET: "ADD_ASSET",
  EDIT_ASSET: "EDIT_ASSET",
  UPDATE_ASSET: "UPDATE_ASSET",
  SHOW_ASSIGNEE_FORM: "SHOW_ASSIGNEE_FORM",
  ADD_ASSIGNEE: "ADD_ASSIGNEE",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SHOW_ASSET_FORM:
      return { ...state, showAssetForm: payload };
    case actions.SHOW_ASSIGNEE_FORM:
      return { ...state, showAssigneeForm: payload };
    case actions.ADD_ASSET:
      payload.asset_id = state.assetIdCount;
      payload.serial = `${payload.type}-${state.assetIdCount}`;
      payload.status = "PENDING";
      return {
        ...state,
        asset: {},
        assets: [...state.assets, payload],
        idCount: state.assetIdCount++,
        showAssetForm: false,
      };
    case actions.EDIT_ASSET:
      return {
        ...state,
        asset: payload,
        showAssetForm: true,
        action: actions.EDIT_ASSET,
      };
    case actions.UPDATE_ASSET:
      console.log(payload);
      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (asset.asset_id === payload.asset_id) {
            return payload;
          }
          return asset;
        }),
        asset: {},
        showAssetForm: false,
        action: actions.EDIT_ASSET,
      };
    case actions.ADD_ASSET:
      payload.asset_id = state.assetIdCount;
      payload.serial = `${payload.type}-${state.assetIdCount}`;
      payload.status = "PENDING";
      return {
        ...state,
        assets: [...state.assets, payload],
        assetIdCount: state.assetIdCount++,
        showAssetForm: false,
      };
    case actions.ADD_ASSIGNEE:
      payload.assignee_id = state.assigneeIdCount;
      payload.employee_id = `EMP-${state.assigneeIdCount}`;
      return {
        ...state,
        assignees: [...state.assignees, payload],
        assigneeIdCount: state.assigneeIdCount++,
        showAssigneeForm: false,
      };
    default:
      return state;
  }
};
