# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class AnswerMeta(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, name: str=None, submit_by: str=None, submit_on: str=None):  # noqa: E501
        """AnswerMeta - a model defined in Swagger

        :param name: The name of this AnswerMeta.  # noqa: E501
        :type name: str
        :param submit_by: The submit_by of this AnswerMeta.  # noqa: E501
        :type submit_by: str
        :param submit_on: The submit_on of this AnswerMeta.  # noqa: E501
        :type submit_on: str
        """
        self.swagger_types = {
            'name': str,
            'submit_by': str,
            'submit_on': str
        }

        self.attribute_map = {
            'name': 'name',
            'submit_by': 'submitBy',
            'submit_on': 'submitOn'
        }
        self._name = name
        self._submit_by = submit_by
        self._submit_on = submit_on

    @classmethod
    def from_dict(cls, dikt) -> 'AnswerMeta':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The AnswerMeta of this AnswerMeta.  # noqa: E501
        :rtype: AnswerMeta
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self) -> str:
        """Gets the name of this AnswerMeta.


        :return: The name of this AnswerMeta.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this AnswerMeta.


        :param name: The name of this AnswerMeta.
        :type name: str
        """

        self._name = name

    @property
    def submit_by(self) -> str:
        """Gets the submit_by of this AnswerMeta.


        :return: The submit_by of this AnswerMeta.
        :rtype: str
        """
        return self._submit_by

    @submit_by.setter
    def submit_by(self, submit_by: str):
        """Sets the submit_by of this AnswerMeta.


        :param submit_by: The submit_by of this AnswerMeta.
        :type submit_by: str
        """

        self._submit_by = submit_by

    @property
    def submit_on(self) -> str:
        """Gets the submit_on of this AnswerMeta.


        :return: The submit_on of this AnswerMeta.
        :rtype: str
        """
        return self._submit_on

    @submit_on.setter
    def submit_on(self, submit_on: str):
        """Sets the submit_on of this AnswerMeta.


        :param submit_on: The submit_on of this AnswerMeta.
        :type submit_on: str
        """

        self._submit_on = submit_on
