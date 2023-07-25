import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

interface Icredintial {
  email: string | null;
  password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};
const provider = new GoogleAuthProvider();

export const createUser = createAsyncThunk(
  "user/create-user",
  async ({ email, password }: Icredintial) => {
    const data = await createUserWithEmailAndPassword(auth, email!, password);
    const response = await fetch(
      `http://localhost:3000/user/${data?.user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const p2 = await response.json();
    const accessToken = p2.token;
    localStorage.setItem("accessToken", accessToken);
    console.log(p2);

    return data.user.email;
  }
);
// const da = { name: "jhh" };
export const loginUser = createAsyncThunk(
  "user/login-user",
  async ({ email, password }: Icredintial) => {
    const data = await signInWithEmailAndPassword(auth, email!, password);
    const response = await fetch(
      `http://localhost:3000/user/${data?.user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const p2 = await response.json();
    const accessToken = p2.token;
    localStorage.setItem("accessToken", accessToken);
    console.log(p2);
    // if (data) {
    //   await fetch(`http://localhost:3000/user/${data?.user?.email}`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(data?.user?.email),
    //   })
    //     .then((response) => response.json())

    //     .then((data) => {
    //       console.log(data, "yes");
    //       const accessToken = data.token;
    //       localStorage.setItem("accessToken", accessToken);
    //     });
    // }
    return data?.user?.email;
  }
);
export const googleUser = createAsyncThunk("user/google-user", async () => {
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential!.accessToken;
  // The signed-in user info.
  const { email } = result.user;
  const response = await fetch(`http://localhost:3000/user/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const p2 = await response.json();
  const accessToken = p2.token;
  localStorage.setItem("accessToken", accessToken);
  console.log(p2);
  return email;
  // return data.user.email;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.isLoading = true), (state.isError = false), (state.error = null);
      })
      .addCase(createUser.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user.email = action.payload);
        (state.isError = false), (state.error = null);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error.message);
      })
      .addCase(loginUser.pending, (state) => {
        (state.isLoading = true), (state.isError = false), (state.error = null);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user.email = action.payload);
        (state.isError = false), (state.error = null);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error.message);
      })

      .addCase(googleUser.pending, (state) => {
        (state.isLoading = true), (state.isError = false), (state.error = null);
      })
      .addCase(googleUser.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user.email = action.payload);
        (state.isError = false), (state.error = null);
      })
      .addCase(googleUser.rejected, (state, action) => {
        state.user.email = null;
        (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error.message);
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
