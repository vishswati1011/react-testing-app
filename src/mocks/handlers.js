import {http, HttpResponse} from 'rest';

export const handlers = [
    http.post('http://localhost:5000',({request})=>{
        
        return HttpResponse.json({
            id: Date.now(),
            feedbackText: request.body.feedbackText
        },{status:201})
    })
]