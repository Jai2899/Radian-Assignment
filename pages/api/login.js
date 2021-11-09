import {resolvers, SECREAT} from "../../Graphql/resolvers";
import _ from "lodash";

export default async function handle (req, res) {
    const result = await resolvers.Mutation.login(_, req.body, {SECREAT});

    if (result.message === "login successfully")
    {
        console.log(result.message);
    }
    res.json(result)
}