SOURCES   := $(shell find src -name '*.java')
CLASSES   := $(SOURCES:.java=.class)
JFLAGS    := -g
JAVA      := java
JAVAC     := javac
CLASSPATH := -classpath .:src

.SUFFIXES: .java .class

.java.class:
	$(JAVAC) $(JFLAGS) $(CLASSPATH) $*.java

.PHONY: test run clean clobber

run: $(CLASSES)
	$(JAVA) $(CLASSPATH) com.xpsurgery.trivia.runner.GameRunner

clean:
	$(RM) $(CLASSES)

clobber: clean

