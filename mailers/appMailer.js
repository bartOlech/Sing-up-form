const mailer = require('./mailer');

exports.applicationNotify = (options)=>{
    const defaultOptions = {
        subject: 'Hey you :)',
        view: 'application-notification'
    };
    return mailer.send(Object.assign(defaultOptions, options));
}