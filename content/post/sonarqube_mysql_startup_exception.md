Caused by: java.sql.SQLException: Incorrect string value: '\x96 safe...' for column 'description' at row 1
	at com.mysql.jdbc.SQLError.createSQLException(SQLError.java:963) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:3966) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:3902) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:2526) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2673) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2549) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.PreparedStatement.executeInternal(PreparedStatement.java:1861) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at com.mysql.jdbc.PreparedStatement.execute(PreparedStatement.java:1192) ~[mysql-connector-java-5.1.39.jar:5.1.39]
	at org.apache.commons.dbcp.DelegatingPreparedStatement.execute(DelegatingPreparedStatement.java:172) ~[commons-dbcp-1.4.jar:1.4]
	at org.apache.commons.dbcp.DelegatingPreparedStatement.execute(DelegatingPreparedStatement.java:172) ~[commons-dbcp-1.4.jar:1.4]
	at org.apache.ibatis.executor.statement.PreparedStatementHandler.update(PreparedStatementHandler.java:44) ~[mybatis-3.2.7.jar:3.2.7]
	at org.apache.ibatis.executor.statement.RoutingStatementHandler.update(RoutingStatementHandler.java:69) ~[mybatis-3.2.7.jar:3.2.7]
	at org.apache.ibatis.executor.ReuseExecutor.doUpdate(ReuseExecutor.java:50) ~[mybatis-3.2.7.jar:3.2.7]
	at org.apache.ibatis.executor.BaseExecutor.update(BaseExecutor.java:105) ~[mybatis-3.2.7.jar:3.2.7]
	at org.apache.ibatis.executor.CachingExecutor.update(CachingExecutor.java:71) ~[mybatis-3.2.7.jar:3.2.7]
	at org.apache.ibatis.session.defaults.DefaultSqlSession.update(DefaultSqlSession.java:152) ~[mybatis-3.2.7.jar:3.2.7]
	... 112 common frames omitted

Connection string was characterEncoding=utf8

Connection string should be characterEncoding=utf8mb4
