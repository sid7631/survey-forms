# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.form_answer_body import FormAnswerBody  # noqa: E501
from swagger_server.models.form_body import FormBody  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response500 import InlineResponse500  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_form_answer_get(self):
        """Test case for form_answer_get

        
        """
        query_string = [('form_id', 'form_id_example')]
        response = self.client.open(
            '/form/answer',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_form_answer_post(self):
        """Test case for form_answer_post

        
        """
        body = FormAnswerBody()
        response = self.client.open(
            '/form/answer',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_form_post(self):
        """Test case for form_post

        
        """
        body = FormBody()
        response = self.client.open(
            '/form',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
