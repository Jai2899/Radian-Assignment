import {resolvers} from '../../Graphql/resolvers';
import _ from "lodash";

export default async function handle (req, res) {
    const result = await resolvers.Mutation.register(_, req.body);

    res.statusCode = 200
    res.json(result)
}