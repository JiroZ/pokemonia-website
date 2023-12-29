const userAuthority = (state  = "", action) => {
    return action.type;
}
export default userAuthority
