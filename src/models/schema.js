export const schema = {
    "models": {
        "Artist": {
            "name": "Artist",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "externalId": {
                    "name": "externalId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "firstLetter": {
                    "name": "firstLetter",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "thumbnailUrl": {
                    "name": "thumbnailUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "albums": {
                    "name": "albums",
                    "isArray": true,
                    "type": {
                        "model": "Album"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "artistId"
                    }
                },
                "songs": {
                    "name": "songs",
                    "isArray": true,
                    "type": {
                        "model": "Song"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "artist"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Artists",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "ByFirstLetter",
                        "fields": [
                            "firstLetter",
                            "title"
                        ],
                        "queryField": "getArtistsByFirstLetter"
                    }
                },
                {
                    "type": "aws_api_key",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "create"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Album": {
            "name": "Album",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "artistId": {
                    "name": "artistId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "externalId": {
                    "name": "externalId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "thumbnailUrl": {
                    "name": "thumbnailUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "songs": {
                    "name": "songs",
                    "isArray": true,
                    "type": {
                        "model": "Song"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "album"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Albums",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byArtist",
                        "fields": [
                            "artistId",
                            "title"
                        ],
                        "queryField": "getAlbumsByArtistId"
                    }
                },
                {
                    "type": "aws_api_key",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "create"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Song": {
            "name": "Song",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "externalId": {
                    "name": "externalId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "artist": {
                    "name": "artist",
                    "isArray": false,
                    "type": {
                        "model": "Artist"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "artistId"
                    }
                },
                "album": {
                    "name": "album",
                    "isArray": false,
                    "type": {
                        "model": "Album"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "albumId"
                    }
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "imageUrl": {
                    "name": "imageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lyrics": {
                    "name": "lyrics",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "referents": {
                    "name": "referents",
                    "isArray": true,
                    "type": {
                        "nonModel": "Referent"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "Songs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byArtist",
                        "fields": [
                            "artistId",
                            "title"
                        ],
                        "queryField": "getSongsByArtistId"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byAlbum",
                        "fields": [
                            "albumId",
                            "title"
                        ],
                        "queryField": "getSongsByAlbumId"
                    }
                },
                {
                    "type": "aws_api_key",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "create"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Translation": {
            "name": "Translation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "songId": {
                    "name": "songId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "lyrics": {
                    "name": "lyrics",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "song": {
                    "name": "song",
                    "isArray": false,
                    "type": {
                        "model": "Song"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Translations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySong",
                        "fields": [
                            "songId",
                            "rating"
                        ],
                        "queryField": "getTranslationsBySongId"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOwner",
                        "fields": [
                            "owner",
                            "createdAt"
                        ],
                        "queryField": "getTranslationsByOwner"
                    }
                },
                {
                    "type": "aws_api_key",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Comment": {
            "name": "Comment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "translationId": {
                    "name": "translationId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "text": {
                    "name": "text",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lineNumber": {
                    "name": "lineNumber",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "translation": {
                    "name": "translation",
                    "isArray": false,
                    "type": {
                        "model": "Translation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Comments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTranslation",
                        "fields": [
                            "translationId",
                            "createdAt"
                        ],
                        "queryField": "getCommentsByTranslationId"
                    }
                },
                {
                    "type": "aws_api_key",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "read",
                                    "delete"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "SongLyricsResponse": {
            "name": "SongLyricsResponse",
            "fields": {
                "body": {
                    "name": "body",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Referent": {
            "name": "Referent",
            "fields": {
                "externalId": {
                    "name": "externalId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "records": {
                    "name": "records",
                    "isArray": true,
                    "type": {
                        "nonModel": "Annotation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Annotation": {
            "name": "Annotation",
            "fields": {
                "externalId": {
                    "name": "externalId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "text": {
                    "name": "text",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "authorThumbnailUrl": {
                    "name": "authorThumbnailUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "0745d404ba2391c65d5826bb17f6bfab"
};