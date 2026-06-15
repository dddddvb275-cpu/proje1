export async function main() {
    const data=await fetch("https://api.turkiyeapi.dev/v2/provinces");
    const provinces=await data.json();
state.province=provinces.data;
}

export let state={
    province: []
};
