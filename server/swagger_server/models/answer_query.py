# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.answer_options import AnswerOptions  # noqa: F401,E501
from swagger_server import util


class AnswerQuery(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, type: str=None, text: str=None, options: List[AnswerOptions]=None, answers: Object=None):  # noqa: E501
        """AnswerQuery - a model defined in Swagger

        :param type: The type of this AnswerQuery.  # noqa: E501
        :type type: str
        :param text: The text of this AnswerQuery.  # noqa: E501
        :type text: str
        :param options: The options of this AnswerQuery.  # noqa: E501
        :type options: List[AnswerOptions]
        :param answers: The answers of this AnswerQuery.  # noqa: E501
        :type answers: Object
        """
        self.swagger_types = {
            'type': str,
            'text': str,
            'options': List[AnswerOptions],
            'answers': Object
        }

        self.attribute_map = {
            'type': 'type',
            'text': 'text',
            'options': 'options',
            'answers': 'answers'
        }
        self._type = type
        self._text = text
        self._options = options
        self._answers = answers

    @classmethod
    def from_dict(cls, dikt) -> 'AnswerQuery':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The AnswerQuery of this AnswerQuery.  # noqa: E501
        :rtype: AnswerQuery
        """
        return util.deserialize_model(dikt, cls)

    @property
    def type(self) -> str:
        """Gets the type of this AnswerQuery.


        :return: The type of this AnswerQuery.
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type: str):
        """Sets the type of this AnswerQuery.


        :param type: The type of this AnswerQuery.
        :type type: str
        """

        self._type = type

    @property
    def text(self) -> str:
        """Gets the text of this AnswerQuery.


        :return: The text of this AnswerQuery.
        :rtype: str
        """
        return self._text

    @text.setter
    def text(self, text: str):
        """Sets the text of this AnswerQuery.


        :param text: The text of this AnswerQuery.
        :type text: str
        """

        self._text = text

    @property
    def options(self) -> List[AnswerOptions]:
        """Gets the options of this AnswerQuery.


        :return: The options of this AnswerQuery.
        :rtype: List[AnswerOptions]
        """
        return self._options

    @options.setter
    def options(self, options: List[AnswerOptions]):
        """Sets the options of this AnswerQuery.


        :param options: The options of this AnswerQuery.
        :type options: List[AnswerOptions]
        """

        self._options = options

    @property
    def answers(self) -> Object:
        """Gets the answers of this AnswerQuery.


        :return: The answers of this AnswerQuery.
        :rtype: Object
        """
        return self._answers

    @answers.setter
    def answers(self, answers: Object):
        """Sets the answers of this AnswerQuery.


        :param answers: The answers of this AnswerQuery.
        :type answers: Object
        """

        self._answers = answers
