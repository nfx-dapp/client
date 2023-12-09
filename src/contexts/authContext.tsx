import { Signer, BrowserProvider } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
  connect: () => Promise<void>;
  address: string | null;
  signer: Signer | null;
  provider: BrowserProvider | null;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [address, setAddress] = useState<string | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    if (!(window as any).ethereum) return;

    setProvider(new BrowserProvider((window as any).ethereum));
  }, []);

  useEffect(() => {
    if (!provider) {
      logout();
      return;
    }
  }, [provider]);

  function logout() {
    setSigner(null);
    setAddress(null);
  }

  async function connect() {
    if (!provider) return;

    await provider.send("eth_requestAccounts", []);
    const _signer = await provider.getSigner();
    const _address = await _signer.getAddress();
    // const {
    //   data: { registered, type },
    // } = await axios.get(`${API_BASE_URL}/user/check/${address}`);
    // if (!registered) {
    //   // redirect to register page
    //   navigate("/auth");
    //   return;
    // }
    // const {
    //   data: { message },
    // } = await axios.get(
    //   `${API_BASE_URL}/${type.toLowerCase()}/auth/nonce/${address}`
    // );
    // const signature = await signer.signMessage(message);
    // const {
    //   data: { org, celeb, token },
    // } = await axios.post(`${API_BASE_URL}/${type.toLowerCase()}/auth/login`, {
    //   address,
    //   signature,
    // });
    setAddress(_address);
    setSigner(_signer);
  }

  return (
    <AuthContext.Provider
      value={{ connect, address, signer, provider, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
