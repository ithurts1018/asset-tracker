export const actions = {
  SHOW_ASSET_FORM: "SHOW_ASSET_FORM",
  ADD_ASSET: "ADD_ASSET",
  EDIT_ASSET: "EDIT_ASSET",
  UPDATE_ASSET: "UPDATE_ASSET",
  SHOW_ASSIGNEE_FORM: "SHOW_ASSIGNEE_FORM",
  ADD_ASSIGNEE: "ADD_ASSIGNEE",
  SHOW_ASSET_TRANSFER_FORM: "SHOW_ASSET_TRANSFER_FORM",
  TRANSFER_ASSET: "TRANSFER_ASSET",
  RECEIVE_ASSET: "RECEIVE_ASSET",
  TRACK_LOCATION: "TRACK_LOCATION",
  SHOW_MAP: "SHOW_MAP",
  SHOW_QR: "SHOW_QR",
  SHOW_LOCATION_FORM: "",
  ADD_LOCATION: "ADD_LOCATION",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.SHOW_ASSET_FORM:
      return { ...state, showAssetForm: payload };
    case actions.SHOW_ASSIGNEE_FORM:
      return { ...state, showAssigneeForm: payload };
    case actions.ADD_ASSET:
      const assetIdCount = state.assetIdCount++;
      payload.asset_id = assetIdCount;
      payload.serial = `${payload.type}-${assetIdCount}`;
      payload.status = "PENDING";
      payload.location = [4, 4];
      return {
        ...state,
        asset: {},
        assets: [...state.assets, payload],
        assetIdCount,
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
    case actions.ADD_ASSIGNEE:
      const assigneeIdCount = state.assigneeIdCount++;

      payload.assignee_id = assigneeIdCount;
      payload.employee_id = `EMP-${assigneeIdCount}`;
      payload.location = [3, 3];
      return {
        ...state,
        assignees: [...state.assignees, payload],
        assigneeIdCount,
        showAssigneeForm: false,
      };
    case actions.SHOW_ASSET_TRANSFER_FORM:
      return { ...state, showAssetTransferForm: payload };
    case actions.TRANSFER_ASSET:
      const assetIds = payload.assets.map(({ asset_id }) => asset_id);

      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (assetIds.includes(asset.asset_id)) {
            asset.target_location = payload.location.location;
            asset.status = "TRANSFER REQUEST PENDING";
          }
          return asset;
        }),
        showAssetTransferForm: false,
      };
    case actions.RECEIVE_ASSET:
      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (asset.target_location && asset.target_location.length === 2) {
            asset.location = asset.target_location;
            asset.target_location = [];
            asset.status = "ACTIVE";
          }
          return asset;
        }),
      };
    case actions.TRACK_LOCATION:
      return { ...state, mapLocation: payload, showMap: true };
    case actions.SHOW_MAP:
      return { ...state, showMap: payload };
    case actions.SHOW_QR:
      return { ...state, showQR: payload.show, qrData: payload.data };
    case actions.SHOW_LOCATION_FORM:
      return { ...state, showLocationForm: payload };
    case actions.ADD_LOCATION:
      const locationIdCount = state.locationIdCount++;
      payload.location_id = locationIdCount;
      payload.location = [7, 7];
      return {
        ...state,
        locationIdCount,
        locations: [...state.locations, payload],
        showLocationForm: false,
      };
    default:
      return state;
  }
};
