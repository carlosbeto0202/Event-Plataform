import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qbh15k3nto01xt9w0ug7ec/master',
    cache: new InMemoryCache()
})