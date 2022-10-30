module.exports = function buildCreateGetAllEventRequest
(
    apikey,
    proxyAgent
)
    {
        return function createGetAllEventRequest
        ()
            {

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