const check = (ctx, varName) => {
    if (!process.env[varName]) {
        ctx.throw('No MAILCHIMP_API_KEY provided');
    }
}


export default (ctx, varNameOrArr) => {
    if (typeof varNameOrArr === 'string') return check(ctx, varNameOrArr);
    varNameOrArr.forEach(name => check(ctx, name)); 
}