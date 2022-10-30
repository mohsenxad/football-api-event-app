const buildTranslateGetEventAllByUserResponse = require('./src/translate-get-event-all-by-user-response');
const buildCreateGetAllEventByUserRequest = require('./src/create-get-all-event-by-user-request');
const buildGetAllEventByUser = require('./src/get-all-event-by-user');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetEventAllByUserResponse = buildTranslateGetEventAllByUserResponse();
        const createGetAllEventByUserRequest = buildCreateGetAllEventByUserRequest(
            APIKEY,
            proxyAgent
        );
        const getAllEventByUser = buildGetAllEventByUser(
            APPID,
            fetch,
            createGetAllEventByUserRequest,
            translateGetEventAllByUserResponse
        );

        return Object.freeze(
            {
                getAllEventByUser
            }
        )
    }
