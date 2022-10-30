module.exports = function buildTranslateGetAllEventResponse
()
    {
        return function translateGetAllEventResponse
        (
            response
        )
            {
                console.log(response);
                return response.documents;
            }
    }