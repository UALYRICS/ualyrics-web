export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "ualyricswebd8c7b1d8": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string",
            "GoogleWebClient": "string",
            "FacebookWebClient": "string"
        },
        "userPoolGroups": {
            "AdminGroupRole": "string"
        }
    },
    "api": {
        "ualyricsweb": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "getlyrics": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "sharedstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}