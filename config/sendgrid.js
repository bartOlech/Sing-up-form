const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('***');

const message = {}
message.from = 'olech.bartlomiej@gmail.com';
message.mail_settings = {
    sandbox_mode: {
        enable:false
    }
};

exports.message = message;