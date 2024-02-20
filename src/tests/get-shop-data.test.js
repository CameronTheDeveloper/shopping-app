import { getShopData } from "../Components/get-shop-data";
import { vi } from "vitest";

global.fetch = vi.fn(() => {
    return (Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ data: 'mockData' }])
    }));
});

describe('getShopData()', () => {
    it('fetches shop data successfully', async () => {
        const setShopDataMock = vi.fn();
        const setErrorMock = vi.fn();
        const setLoadingMock = vi.fn();

        await getShopData(setShopDataMock, setErrorMock, setLoadingMock);

        expect(setShopDataMock).toHaveBeenCalledWith([{ data: 'mockData' }]);
        expect(setErrorMock).not.toHaveBeenCalled();
        expect(setLoadingMock).toHaveBeenCalledWith(false);
    });

    it('handles network response error', async () => {
        global.fetch.mockImplementationOnce(() => Promise.reject(new Error("Network Error")));

        const setShopDataMock = vi.fn();
        const setErrorMock = vi.fn();
        const setLoadingMock = vi.fn();

        await getShopData(setShopDataMock, setErrorMock, setLoadingMock);
        expect(setShopDataMock).not.toHaveBeenCalled();
        expect(setErrorMock).toHaveBeenCalledWith(new Error("Network Error"));
        expect(setLoadingMock).toHaveBeenCalledWith(false);
    });
});