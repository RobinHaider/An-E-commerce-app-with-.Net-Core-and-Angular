using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }


        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(in int statusCode)
        {
            return statusCode switch
                {
                    400=>"A bad request, you have made",
                    401=> "Authorized, you are not",
                    404=> "Resource found, you are not",
                    500=>
                    "Errors are the path to the dark side, Errors lead to the anger. Anger lead to hate. Hate leads to career change."
                    ,
                    _ => null
                };
        }
    }
}
