import { createAsyncThunk } from '@reduxjs/toolkit'

const showNetModal = createAsyncThunk('bigbug/show', async (msg: any) => {
  const payload = {
    netModalShow: msg,
  }
  return payload
})

export { showNetModal }
