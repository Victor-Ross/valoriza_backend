import { Router } from 'express';
const router = Router();

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.get('/users/compliments/sent', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/received', ensureAuthenticated, listUserReceivedComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

router.get('/users', ensureAuthenticated, listUsersController.handle);
router.post('/users', createUserController.handle);

router.post('/login', authenticateUserController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post('/compliments', ensureAuthenticated, createComplimentController.handle);


export { router };