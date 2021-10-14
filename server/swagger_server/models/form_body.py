# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.form import Form  # noqa: F401,E501
from swagger_server.models.form_meta import FormMeta  # noqa: F401,E501
from swagger_server import util


class FormBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, data: List[Form]=None, meta_data: FormMeta=None):  # noqa: E501
        """FormBody - a model defined in Swagger

        :param data: The data of this FormBody.  # noqa: E501
        :type data: List[Form]
        :param meta_data: The meta_data of this FormBody.  # noqa: E501
        :type meta_data: FormMeta
        """
        self.swagger_types = {
            'data': List[Form],
            'meta_data': FormMeta
        }

        self.attribute_map = {
            'data': 'data',
            'meta_data': 'metaData'
        }
        self._data = data
        self._meta_data = meta_data

    @classmethod
    def from_dict(cls, dikt) -> 'FormBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The form_body of this FormBody.  # noqa: E501
        :rtype: FormBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def data(self) -> List[Form]:
        """Gets the data of this FormBody.


        :return: The data of this FormBody.
        :rtype: List[Form]
        """
        return self._data

    @data.setter
    def data(self, data: List[Form]):
        """Sets the data of this FormBody.


        :param data: The data of this FormBody.
        :type data: List[Form]
        """

        self._data = data

    @property
    def meta_data(self) -> FormMeta:
        """Gets the meta_data of this FormBody.


        :return: The meta_data of this FormBody.
        :rtype: FormMeta
        """
        return self._meta_data

    @meta_data.setter
    def meta_data(self, meta_data: FormMeta):
        """Sets the meta_data of this FormBody.


        :param meta_data: The meta_data of this FormBody.
        :type meta_data: FormMeta
        """

        self._meta_data = meta_data