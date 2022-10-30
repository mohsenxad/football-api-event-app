module.exports = function buildCreateGetAllEventByUserRequest
(
    apikey,
    proxyAgent
)
    {
        return function createGetAllEventByUserRequest
        (
            userId
        )
            {
                const query = {
                    "token": token 
                };

                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };

                const projection = {}

                const body = JSON.stringify(
                    {
                        collection:"events",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query,
                        projection:projection
                    }
                );
        
                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };
        
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
        
                return options; 
            }
    }