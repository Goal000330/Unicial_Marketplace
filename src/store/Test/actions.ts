import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTest = createAsyncThunk("test/getTest", async () => {
  // const response = await getTestAPI();
  const response = {
    data: {
      Success: "true",
      Error: "Invalid Email",
      body: {
        rowsCount: 4,
        // name: "Users",
        // description: "Users Permission",
        status: true,
      },
    },
  };
  if (!response.data.Success) {
    window.alert(response.data.Error);
    window.alert("non");
  } else {
    // window.alert("Successfully permission registered");
    return response.data.body.rowsCount;
  }
  // return response.data
});
