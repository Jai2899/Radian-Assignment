import {resolvers} from "../../Graphql/resolvers";
import _ from "lodash";
import {SECREAT} from "./graphql";

export default async function handle (req, res) {
    const result = await resolvers.Mutation.login(_, req.body, {SECREAT});

    if (result.message === "login successfully")
    {
        result.status = 200;
        console.log(result.message);
    }
    res.json(result)
}