import connexion
import six

from swagger_server.models.form_answer_body import FormAnswerBody  # noqa: E501
from swagger_server.models.form_body import FormBody  # noqa: E501
from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response500 import InlineResponse500  # noqa: E501
from swagger_server import util


def form_answer_get(form_id):  # noqa: E501
    """form_answer_get

     # noqa: E501

    :param form_id: form id to query
    :type form_id: str

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def form_answer_post(body=None):  # noqa: E501
    """form_answer_post

    Submit Form Answer # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = FormAnswerBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def form_post(body=None):  # noqa: E501
    """form_post

    Add a new form # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = FormBody.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
