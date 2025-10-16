import express_Rate_Limit from 'express-rate-limit'

/**
+ * Creates an express rate limit middleware.
+ *
+ * @param {number} seconds - The time window in seconds
+ * @param {number} request - The maximum number of requests
+ * @return {unknown} The express rate limit middleware
+ */

export function expressRateLimit(seconds: number, request: number){
    return express_Rate_Limit({ windowMs: seconds * 1000, max: request, message: "Rate limit exceeded  limit.", headers: true})
}