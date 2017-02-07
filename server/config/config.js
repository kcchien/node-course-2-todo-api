/**
 * Created by KC on 06/02/2017.
 */
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
    console.log('MONGODB_URI: ',process.env.MONGODB_URI);
} else {
    // Test mode
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
    console.log('MONGODB_URI: ',process.env.MONGODB_URI);
}